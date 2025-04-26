import React, { useEffect, useState } from 'react'
import styles from './Dashborad.module.scss'
import Form from '../../components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../redux/reducers/dashReducer'

const Dashboard = () => {

    const dispatch = useDispatch()
    const { products, loading, error } = useSelector(state => state.products)
    const [editMode, setEditMode] = useState(false)
    const [editData, setEditData] = useState({
      id: null,
      name: '',
      description: ''
    })
  
    useEffect(() => {
      dispatch(getProductThunk())
    }, [dispatch])
  
    const handleDelete = (id) => {
      dispatch(deleteProductThunk(id))
    }
  
    const handleEdit = (item) => {
      setEditMode(true)
      setEditData({
        id: item.id,
        name: item.name || '',
        description: item.description || ''
      })
    }
  
    const handleUpdate = () => {
      dispatch(updateProductThunk({
        id: editData.id,
        data: {
          name: editData.name,
          description: editData.description
        }
      }))
      setEditMode(false)
      setEditData({ id: null, name: '', description: '' })
    }
  
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setEditData({
        ...editData,
        [name]: value
      })
    }


  return (
    <div className={styles.container}>
      <header>
        <div className={styles.title}>
          <h1>Dashboard</h1>
        </div>
      </header>

      <div className={styles.form}>
        <h1>FORM</h1>
        <Form />
      </div>

      <div className={styles.data}>
        <h1>DATA</h1>
        <button 
          className={styles.refreshButton} 
          onClick={() => dispatch(getProductThunk())}
        >
          Refresh Data
        </button>
        
        {loading && <p>Loading...</p>}
        {error && <p className={styles.error}>Error: {error}</p>}
        
        {editMode && (
          <div className={styles.editForm}>
            <h3>Edit Category</h3>
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleInputChange}
              placeholder="Category Name"
            />
            <input
              type="text"
              name="description"
              value={editData.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
            <div className={styles.editButtons}>
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </div>
        )}
        
        <div className={styles.datas}>
          {products && products.length > 0 ? (
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td className={styles.actions}>
                      <button 
                        className={styles.editButton}
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button 
                        className={styles.deleteButton}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
