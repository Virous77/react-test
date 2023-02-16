import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {
  userBookmark,
  bookMarkUsr,
  bookmarkedUser,
} from "../../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const BookmarkAction = ({ user }) => {
  const dispatch = useDispatch();
  const bookmarkUser = useSelector(bookMarkUsr);

  const handleBookmark = (data) => {
    dispatch(userBookmark(data));
  };

  return (
    <div>
      {bookmarkUser.find((bookUsr) => bookUsr.id === user.id) ? (
        <AiFillStar
          onClick={() => dispatch(bookmarkedUser(user))}
          size={22}
          cursor="pointer"
        />
      ) : (
        <AiOutlineStar
          onClick={() => handleBookmark(user)}
          size={22}
          cursor="pointer"
        />
      )}
    </div>
  );
};

export default BookmarkAction;
