import React from 'react'



function About(props) {
  return (
    
    <div class="accordion " id="accordionExample" style={{ color : props.color }}>
        <h1 className='my-3'>About Us</h1>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color : props.color , background : props.mode}}>
                Text Form
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={{ color : props.color , background : props.mode}}>
                <strong>Text manipulation is the process of using computer automation to modify text on a large scale to suit the needs of the user.</strong>An example of this can include changing the first character of every word in a text document to uppercase.
                        <br/>Another example may include a spelling mistake for a particular word that exists throughout an entire document. We may want to change every instance of this misspelled word to the correct spelling.
                        <br/>These are just two examples. Imagine how you would use automation to modify text files to make any type of change you want!
                        <br/>We all know that text files come in many sizes, from a short one page full of text or less, to many hundreds and even thousands of pages long.
                        Manually going through one page of text and editing to make changes doesn’t take a great deal of effort, but there’s always a chance of human error.
                        By utilising the power of Text Form we can modify words in any text file and of any size to its default.</div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={{ color : props.color , background : props.mode}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What can it do?
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={{ color : props.color , background : props.mode}}>
                <strong className='my-2'>Following are the things it can perform.</strong>
                <list >
                    <ul className="mt-3">Convert to uppercase.</ul>
                    <ul>Convert to lower case.</ul>
                    <ul>Convert text with multiple space to single space.</ul>
                    <ul>Tells how many character are there.</ul>
                    <ul>Tells how many words are there.</ul>
                    <ul>Tells estimated time for reading.</ul>
                    <ul>It also preview text.</ul>
                </list>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{ color : props.color , background : props.mode}}>
                Importance of Text manupulation
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body"style={{ color : props.color , background : props.mode}}>
            Text manipulation in software development refers to the process of modifying, parsing, and working with textual data programmatically. It involves a wide range of operations such as string concatenation, searching and replacing substrings, pattern matching, formatting, and more. Text manipulation is a crucial skill for developers as it helps in handling input/output data, processing user input, generating dynamic content, and more. Various programming languages and libraries offer built-in functions and tools to perform text manipulation efficiently.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About