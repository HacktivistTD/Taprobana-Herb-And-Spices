// src/components/CommentSection.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth'; // Import your custom authentication hook
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Import your Firebase firestore instance

const CommentSection = ({ userId }) => {
  const { user } = useAuth(); // Custom hook to get current user
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from Firestore based on userId
    const fetchComments = async () => {
      const querySnapshot = await getDocs(collection(db, 'comments').where('userId', '==', userId));
      const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
    };

    fetchComments();
  }, [userId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in to leave a comment.');
      return;
    }

    try {
      // Add comment to Firestore
      const docRef = await addDoc(collection(db, 'comments'), {
        userId: user.uid,
        userName: user.displayName,
        comment,
        createdAt: new Date()
      });
      console.log('Comment added with ID: ', docRef.id);
      
      // Update comments state to display new comment
      setComments([...comments, { id: docRef.id, userId: user.uid, userName: user.displayName, comment }]);
      
      // Clear comment input
      setComment('');
    } catch (error) {
      console.error('Error adding comment: ', error);
      // Handle error as needed
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Submit Comment
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {comments.map(comment => (
          <div key={comment.id} className="mb-4">
            <p className="font-semibold">{comment.userName}</p>
            <p>{comment.comment}</p>
            <hr className="my-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
