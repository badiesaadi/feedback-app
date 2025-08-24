import React from 'react'
import { createContext , useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider =  ({children }) => {
    const [feedback,setFeedback] = useState(
        [
            {
                id : 1,
                text : 'This  is feedback item one',
                rating : 10,
            },
             {
                id : 2,
                text : 'This is feedback item two',
                rating : 9,
            },
             {
                id : 3,
                text : 'This is feedback item three',
                rating : 10,
            }
        ]
    )



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
 