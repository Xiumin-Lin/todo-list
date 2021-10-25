import React, { useContext } from "react";
import { connect } from "react-redux";
import { addTodo, setVisibilityFilter, VisibilityFilters } from "../actions";
import ThemeContext from "../contexts/ThemeContext.js";

const AddTodo = ({ dispatch }) => {
  let input;
  const { theme } = useContext(ThemeContext);

  return (
    <form
      className={"flex mt-4 justify-center w-full"}
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
        input.value = "";
      }}
    >
      <input
        className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
        } appearance-none rounded-xl focus:outline-none w-full py-2 px-3 mr-4`}
        placeholder={"Enter new task"}
        ref={(node) => (input = node)}
      />
      <button
        style={{
          backgroundColor: "#ff4e00",
          backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
        }}
        className={"p-3 focus:outline-none rounded-full font-bold text-white"}
        type="submit"
      >
        <svg
          className={"w-5 h-5"}
          viewBox="0 0 15 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0V4.5C9 4.89782 9.15804 5.27936 9.43934 5.56066C9.72064 5.84196 10.1022 6 10.5 6H15V14.5C15 14.8978 14.842 15.2794 14.5607 15.5607C14.2794 15.842 13.8978 16 13.5 16H8.743C9.48987 15.0956 9.92804 13.976 9.99351 12.8049C10.059 11.6338 9.74833 10.4724 9.10692 9.49034C8.46551 8.50829 7.52694 7.75702 6.42827 7.34623C5.32959 6.93544 4.12837 6.88666 3 7.207V1.5C3 1.10218 3.15804 0.720644 3.43934 0.43934C3.72064 0.158035 4.10218 0 4.5 0H9Z"
            fill="#F8F8F8"
          />
          <path
            d="M10 0.25V4.5C10 4.63261 10.0527 4.75979 10.1464 4.85355C10.2402 4.94732 10.3674 5 10.5 5H14.75L10 0.25Z"
            fill="#F8F8F8"
          />
          <path
            d="M9 12.5C9 13.6935 8.52589 14.8381 7.68198 15.682C6.83807 16.5259 5.69347 17 4.5 17C3.30653 17 2.16193 16.5259 1.31802 15.682C0.474106 14.8381 0 13.6935 0 12.5C0 11.3065 0.474106 10.1619 1.31802 9.31802C2.16193 8.47411 3.30653 8 4.5 8C5.69347 8 6.83807 8.47411 7.68198 9.31802C8.52589 10.1619 9 11.3065 9 12.5V12.5ZM5 10.5C5 10.3674 4.94732 10.2402 4.85355 10.1464C4.75979 10.0527 4.63261 10 4.5 10C4.36739 10 4.24021 10.0527 4.14645 10.1464C4.05268 10.2402 4 10.3674 4 10.5V12H2.5C2.36739 12 2.24021 12.0527 2.14645 12.1464C2.05268 12.2402 2 12.3674 2 12.5C2 12.6326 2.05268 12.7598 2.14645 12.8536C2.24021 12.9473 2.36739 13 2.5 13H4V14.5C4 14.6326 4.05268 14.7598 4.14645 14.8536C4.24021 14.9473 4.36739 15 4.5 15C4.63261 15 4.75979 14.9473 4.85355 14.8536C4.94732 14.7598 5 14.6326 5 14.5V13H6.5C6.63261 13 6.75979 12.9473 6.85355 12.8536C6.94732 12.7598 7 12.6326 7 12.5C7 12.3674 6.94732 12.2402 6.85355 12.1464C6.75979 12.0527 6.63261 12 6.5 12H5V10.5Z"
            fill="#F8F8F8"
          />
        </svg>
      </button>
    </form>
  );
};

export default connect()(AddTodo);
