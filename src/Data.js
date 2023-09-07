import saint from './assets/saint.jpg'
const currentDate = new Date();

let currentDay= String(currentDate.getDate()).padStart(2, '0');

let currentMonth = String(currentDate.getMonth()+1).padStart(2,"0");

let currentYear = currentDate.getFullYear();


let published = `${currentDay}-${currentMonth}-${currentYear}`;

export const data = [
    {
        id: 1,
        img: saint,
        author: `Bradley matjie`,
        posted: published,
        categories: `first blog, blogging, idea, startup, writting`,
        title: 'STARTING MY FIRST BLOGGING SITE',
        subdescription: `I've been been thinking of doing a blogging website since high school days, the issue i always faced was how to make it universal and accomodate all types of people who want to express their feelings through writing...`,
        description: `I've been been thinking of doing a blogging 
                    website since high school days, the issue i 
                    always faced was how to make it universal and 
                    accomodate all types of people who want to 
                    express their feelings through writing. 
                    with Perspective Impulse the idea was simple, 
                    provide people with a very slick minimal, 
                    unobtrusive and very easy to use and navigate 
                    through platform, and make it accessible to 
                    everybody so that people can safely share their 
                    thoughts and feelings in the the best way possible...` 
    }
]