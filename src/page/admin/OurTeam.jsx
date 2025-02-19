import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [newMember, setNewMember] = useState({
    image: '',
    name: '',
    title: '',
    linkedin: '',
    twitter: '',
    github: ''
  })
  const [editMode, setEditMode] = useState(false) // Add a flag to track if we're editing
  const [currentMemberId, setCurrentMemberId] = useState(null) // Store the current member ID being edited

  // Fetch all team members on component mount
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}team/get`) // Replace with your actual backend route
      .then(response => {
        setTeamMembers(response.data)
      })
      .catch(error => {
        console.error('Error fetching team members:', error)
      })
  }, [])

  // Handle input change for each member
  const handleInputChange = (e, field) => {
    setNewMember({ ...newMember, [field]: e.target.value })
  }

  // Handle image upload for each member
  const handleImageUpload = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewMember({ ...newMember, image: reader.result })
      }
      reader.readAsDataURL(file) // Convert image to base64 string
    }
  }

  // Add new team member
  const handleAddMember = async () => {
    try {
      const formData = new FormData()
      formData.append('name', newMember.name)
      formData.append('title', newMember.title)
      formData.append('linkedin', newMember.linkedin)
      formData.append('twitter', newMember.twitter)
      formData.append('github', newMember.github)

      // If the backend expects a file instead of a base64 string
      if (newMember.image) {
        const file = dataURItoBlob(newMember.image)
        formData.append('image', file)
      }

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}team/post`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      setTeamMembers([...teamMembers, response.data.newMember])
      setIsFormVisible(false)
      resetForm()
    } catch (error) {
      console.error('Error adding team member:', error)
    }
  }

  // Update existing team member
  const handleUpdateMember = async () => {
    try {
      const formData = new FormData()
      formData.append('name', newMember.name)
      formData.append('title', newMember.title)
      formData.append('linkedin', newMember.linkedin)
      formData.append('twitter', newMember.twitter)
      formData.append('github', newMember.github)

      // If the backend expects a file instead of a base64 string
      if (newMember.image) {
        const file = dataURItoBlob(newMember.image)
        formData.append('image', file)
      }

      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_URL}team/${currentMemberId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      // Update the teamMembers state to reflect the changes
      setTeamMembers(
        teamMembers.map(member =>
          member._id === currentMemberId ? response.data.updatedMember : member
        )
      )
      setIsFormVisible(false)
      resetForm()
    } catch (error) {
      console.error('Error updating team member:', error)
    }
  }

  // Convert base64 to a file (Blob)
  const dataURItoBlob = dataURI => {
    const byteString = atob(dataURI.split(',')[1])
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const arrayBuffer = new ArrayBuffer(byteString.length)
    const uintArray = new Uint8Array(arrayBuffer)
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i)
    }
    return new Blob([uintArray], { type: mimeString })
  }

  // Reset form after adding/updating
  const resetForm = () => {
    setNewMember({
      image: '',
      name: '',
      title: '',
      linkedin: '',
      twitter: '',
      github: ''
    })
    setEditMode(false)
    setCurrentMemberId(null)
  }

  // Set form data for editing
  const handleEditMember = member => {
    setNewMember({
      image: member.image,
      name: member.name,
      title: member.title,
      linkedin: member.linkedin,
      twitter: member.twitter,
      github: member.github
    })
    setCurrentMemberId(member._id)
    setEditMode(true)
    setIsFormVisible(true)
  }

  // Delete team member
  const handleDeleteMember = async id => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}team/${id}`)
      setTeamMembers(teamMembers.filter(member => member._id !== id))
    } catch (error) {
      console.error('Error deleting team member:', error)
    }
  }

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Add or Edit Team Members</h2>
      {/* Show form if isFormVisible is true */}
      {isFormVisible && (
        <form>
          <div className='bg-white p-6 rounded-lg shadow-md mb-4'>
            <h3 className='text-xl font-semibold mb-2'>
              {editMode ? 'Edit Team Member' : 'New Team Member'}
            </h3>
            <div className='grid grid-cols-1 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Upload Image
                </label>
                <input
                  type='file'
                  onChange={handleImageUpload}
                  className='w-full p-2 border rounded'
                />
                {newMember.image && (
                  <img
                    src={newMember.image}
                    alt='Team Member'
                    className='mt-2 w-32 h-32 object-cover rounded-full'
                  />
                )}
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>Name</label>
                <input
                  type='text'
                  value={newMember.name}
                  onChange={e => handleInputChange(e, 'name')}
                  className='w-full p-2 border rounded'
                  placeholder='Enter Name'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>Title</label>
                <input
                  type='text'
                  value={newMember.title}
                  onChange={e => handleInputChange(e, 'title')}
                  className='w-full p-2 border rounded'
                  placeholder='Enter Title'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  LinkedIn URL
                </label>
                <input
                  type='text'
                  value={newMember.linkedin}
                  onChange={e => handleInputChange(e, 'linkedin')}
                  className='w-full p-2 border rounded'
                  placeholder='Enter LinkedIn URL'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  Twitter URL
                </label>
                <input
                  type='text'
                  value={newMember.twitter}
                  onChange={e => handleInputChange(e, 'twitter')}
                  className='w-full p-2 border rounded'
                  placeholder='Enter Twitter URL'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>
                  GitHub URL
                </label>
                <input
                  type='text'
                  value={newMember.github}
                  onChange={e => handleInputChange(e, 'github')}
                  className='w-full p-2 border rounded'
                  placeholder='Enter GitHub URL'
                />
              </div>
            </div>
            <button
              type='button'
              onClick={editMode ? handleUpdateMember : handleAddMember}
              className='bg-blue-500 text-white py-2 px-4 rounded mt-4'
            >
              {editMode ? 'Update Member' : 'Add Member'}
            </button>
          </div>
        </form>
      )}

      {/* Display list of team members */}
      <div className='mt-8'>
        <h3 className='text-2xl font-semibold'>Team Members</h3>
        <div className='grid grid-cols-1 gap-4 mt-4'>
          {teamMembers.map(member => (
            <div key={member._id} className='bg-white p-4 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <img
                  src={`${import.meta.env.VITE_SERVER_URL.split('/api')[0]}${member.image}`}
                  alt='Team Member'
                  className='w-16 h-16 object-cover rounded-full mr-4'
                />
                <div>
                  <h4 className='text-xl font-semibold'>{member.name}</h4>
                  <p className='text-sm text-gray-600'>{member.title}</p>
                </div>
              </div>
              <div className='text-sm text-gray-600'>
                <p>LinkedIn: {member.linkedin}</p>
                <p>Twitter: {member.twitter}</p>
                <p>GitHub: {member.github}</p>
              </div>
              <div className='mt-4'>
                <button
                  onClick={() => handleEditMember(member)}
                  className='bg-yellow-500 text-white py-2 px-4 rounded mr-2'
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteMember(member._id)}
                  className='bg-red-500 text-white py-2 px-4 rounded'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isFormVisible && (
        <button
          type='button'
          onClick={() => setIsFormVisible(true)}
          className='bg-green-500 text-white py-2 px-4 rounded mt-4'
        >
          Add Team Member
        </button>
      )}
    </div>
  )
}

export default OurTeam
