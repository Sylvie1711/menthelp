import React from 'react'

export default function QuestionCard({ questionObject, onAnswer }) {
    return (
        <div className="lg:pl-[200px] lg:pr-[200px] px-10 pt-8 mt-2 mb-[200px]">
            <div className="text-lg font-serif"> Please select any one option based on the question asked below</div>
            <div
                className="mt-4 lg:text-5xl text-2xl font-bold inline-block text-transparent bg-clip-text h-auto pb-4"
                style={{
                    backgroundImage: 'linear-gradient(to right, #2596be, #085cac, #604cb4)',
                    backgroundSize: '200% 200%', 
                    animation: 'moveGradient 10s ease infinite', 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >{questionObject.question}
            </div>
            <ul>
                <div className='mt-6 flex flex-col justify-center'>
                    {questionObject.responseOptions.map((option, index) => (
                        <li key={index} onClick={() => onAnswer(index)}>
                            <div>
                                <button className="ques-btn mb-4">
                                    <i className="ques-animation"></i>{option}<i className="ques-animation"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    )
}
