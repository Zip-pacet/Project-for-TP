import React from "react";

const WorkExamples = (props) => {
  return (
    <div className='work-examples'>
      <strong>Примеры работ</strong>
      <div className='example-pictures'>
        <img src={props.pic1} alt='Example work 1' className='example-img' />
        <img src={props.pic2} alt='Example work 2' className='example-img' />
      </div>
    </div>
  );
};

export default WorkExamples;
