import React from 'react'
import { createContext , useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider =  ({children }) => {
    const [feedback,setFeedback] = useState([])
    useEffect(() => {
        fetchFeedback()
    },[])
 // fetch feedback

 const fetchFeedback = async () => {
   const response = await fetch('/feedback?_sort=id&_order=desc')


    const data = await response.json()
    
    setFeedback(data)
 }

    const [feedbackEdit,setFeedbackEdit] = useState({
        item : {},
        edit : false
    })
// Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    };

        // Function to delete feedback
        const deleteFeedback = (id) => 
            {
                if(window.confirm('Are you sure you want to delete?'))
                {
                    setFeedback(feedback.filter((item) => item.id !== id));
                }
            }


            //update feedback item 
            const updateFeedback = (id,updItem) => {
                setFeedback(feedback.map((item) => item.id === id ? { ...item,...updItem} : item)) 
            }



            // edit feedback

            const editFeedback = (item) => {
                setFeedbackEdit({
                    item,
                    edit : true
                })
            } 

    return <FeedbackContext.Provider  value={{
        feedback ,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
 
    }}>
    {children}
    </FeedbackContext.Provider>


}

export default FeedbackContext; 
 