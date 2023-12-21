import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-2">

            <div className="top w-full flex font-semibold items-center justify-between">
                <div className="icons text-black flex items-center mx-3 gap-4 text-2xl">
                    <i className={`fab fa-facebook-f`}></i>
                    <i className={`fab fa-linkedin-in`}></i>
                    <i className={`fab fa-twitter`}></i>
                    <i className={`fab fa-github`}></i>
                </div>
                <div className="contact flex text-xs gap-4 mx-3 text-black">
                    <p className={'underline'}>
                        sp332@njit.edu
                    </p>
                    <p>
                        +1 (862) 270 7072
                    </p>
                </div>
            </div>

            <div className="bg-blue-100 w-full h-11 mt-3">

            </div>

            <div className="w-full flex items-center">
                <section className="left grid place-items-center w-1/3">
                    <button className={'btn w-[140px] bg-white rounded-full text-xs text-black'}>
                        Connect with me
                    </button>
                </section>

                <section className="middle flex flex-col items-center justify-center w-1/3">
                    <div className="top text-3xl my-8 font-bold">
                        I'm Sahithi Pendyala
                    </div>
                    <div className="img ring-1 ring-offset-[10px] ring-gray-500 rounded-full ring-offset-blue-200">
                        <img src="/images/image%206344214.png" alt="profile"/>
                    </div>
                    <h1 className="bottom bold-h1 text-center my-8 font-bold">
                        Software Developer
                    </h1>
                </section>

                <section className="right flex flex-col items-center justify-center w-1/3">
                    <button className={'btn w-[140px] bg-white rounded-full text-xs text-black'}>
                        Download CV
                    </button>
                </section>
            </div>

            <div className="bg-blue-100 flex justify-between text-xl items-center px-8 w-11/12 font-bold py-4 mt-3">
                <div className="custom-nav">
                    About Me
                </div>
                <div className="custom-nav">
                    Skills
                </div>
                <div className="custom-nav">
                    Projects
                </div>
                <div className="custom-nav">
                    Education
                </div>
                <div className="custom-nav">
                    Certifications
                </div>
            </div>

            <div className="mt-10 w-full flex flex-col justify-center">
                <div className="h-line flex mx-12 justify-center items-center">
                    <div className="line border-b-2 w-full border-black">

                    </div>
                    <div className="ab text-2xl font-bold w-3/12 text-center">
                        About Me
                    </div>
                    <div className="line border-b-2 w-full border-black">

                    </div>
                </div>
                <div className="content font-medium mt-10 mx-12">

                    Hello, I'm Sahithi Pendyala, a dedicated and enthusiastic graduate student currently pursuing my
                    Master's degree in Computer and Information Security at the New Jersey Institute of Technology. With
                    a strong passion for data analysis, I'm excited about the opportunity to leverage my skills and
                    knowledge to excel in the field of data analysis.
                    <br/><br/>
                    During my academic journey and professional experience, I have honed my technical skills in a
                    variety of programming languages and technologies. My proficiency includes HTML, CSS, JavaScript,
                    SQL, Python, and ReactJS. These skills have not only equipped me to extract, manipulate, and
                    visualize data but also to create interactive web-based data solutions.
                    <br/><br/>
                    With over 2 years of experience in the tech industry, I've had the opportunity to work on various
                    projects, which have provided me with a solid foundation in data analysis techniques and
                    methodologies. I'm a firm believer in the power of data-driven decision-making and I'm excited to
                    apply my expertise to real-world challenges.
                </div>
            </div>

            <div className="skills flex mt-24 flex-row">

                <div className="w-3/12 grid place-items-center">
                    <h2 className="text mt-3-3xl font-bold">
                        Skills
                    </h2>
                </div>

                <div className="skill-cards grid grid-cols-3 w-9/12">
                    <div className="skill-card font-bold">
                        HTML 5
                    </div>
                    <div className="skill-card font-bold">
                        CSS 3
                    </div>
                    <div className="skill-card font-bold">
                        Python
                    </div>
                    <div className="skill-card font-bold">
                        JavaScript
                    </div>
                    <div className="skill-card font-bold">
                        SQL
                    </div>
                    <div className="skill-card font-bold">
                        ReactJS
                    </div>
                </div>

            </div>

            <div className="projects w-full relative flex p-10 bg-white">

                <div className="right flex flex-col items-center justify-center gap-4 w-1/2">
                    <div className="w-1/2 space-y-4">
                        <h3 className={'text-green-400 font-sensation'}>
                            My Projects
                        </h3>
                        <p>
                            These are my few selected projects where I designed the User interface to build a clickable
                            prototype.
                        </p>
                        <p>
                            These are my few selected projects where I designed the User interface to build a clickable
                            prototype.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center bg-white bottom-3">
                        <h3 className={'text-xl text-center mb-3 font-bold font-sensation'}>
                            Save My Resume
                        </h3>
                        <div className="flex items-center justify-center">
                            <input
                                className={'input input-sm bg-white border rounded-l-full border-green-900 rounded-r-none'}
                                placeholder={'Enter Email Address'} type="text mt-3"/>
                            <button className={'btn btn-sm bg-green-900 border-none rounded-r-full rounded-l-none'}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="right flex gap-4">
                    <div className="a">
                        <img src="/images/project%20card%202.png" alt=""/>
                        <div className="text mt-3">
                            Smart Water meter (Arduino)
                        </div>
                        <br/>
                        <a className={'text-green-400 font-bold text-xs'} href="">
                            View <i className={`fas fa-arrow-right`}></i>
                        </a>
                    </div>
                    <div className="b">
                        <img src="/images/project%20card.png" alt=""/>
                        <div className="text mt-3 whitespace-pre-wrap">
                            Medical Hospital Portal for VIT university
                        </div>
                        <a className={'text-green-400 font-bold text-xs'} href="">
                            View <i className={`fas fa-arrow-right`}></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className="education w-full flex flex-col items-start p-8 mt-12">
                <h2>
                    Education
                </h2>
                <div className="grid grid-cols-2 justify-center gap-10">

                    <div className="bg-white p-5 flex flex-col items-start justify-center gap-1 mt-8">
                        <div className="edu-title font-bold">
                            MS in Computer and Information Security
                        </div>
                        <div className="edu-subtitle text-gray-500">
                            New Jersey Institute of Technology
                        </div>
                        <div className="edu-subtitle">
                            2023-2025
                        </div>
                    </div>

                    <div className="bg-white p-5 flex flex-col items-start justify-center gap-1 mt-8">
                        <div className="edu-title font-bold">
                            Bachelor of Technology - Computer Science
                            and Engineering Specialized In
                            Network and Security
                        </div>
                        <div className="edu-subtitle text-gray-500">
                            Vellore Institute Of Technology, India
                        </div>
                    </div>
                </div>

            </div>

            <div className="certifications w-full grid grid-cols-1 items-start p-8 mt-12">
                <h2>
                    Certifications
                </h2>
                <div className="grid gap-10 mt-4 grid-cols-2">

                    <div className="bg-white p-5 flex flex-col items-start justify-center gap-1">
                        <div className="edu-title font-bold">
                            Oracle
                        </div>
                        <div className="edu-subtitle text-gray-500">
                            Cloud infrastructure certification
                        </div>
                    </div>
                    <div className="bg-white p-5 flex flex-col items-start justify-center gap-1 ">
                        <div className="edu-title font-bold">
                            SimpliLearn
                        </div>
                        <div className="edu-subtitle text-gray-500">
                            Machine learning by SkillUp
                        </div>
                    </div>
                    <div className="bg-white p-5 flex flex-col items-start justify-center gap-1">
                        <div className="edu-title font-bold">
                            Google Coursera
                        </div>
                        <div className="edu-subtitle text-gray-500">
                            Data, Data Every Where.
                        </div>
                    </div>
                    <div className="bg-white p-5 flex flex-col items-start justify-center gap-1">
                        <div className="edu-title font-bold">
                            Indo-Euro Synchronization
                        </div>
                        <div className="edu-subtitle text-gray-500">
                            Advanced Data Science Internship
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer flex flex-col py-8 items-center justify-center w-full border-b-8 border-green-900 bg-white">
                <center className="text-center text-2xl text-green-500 font-bold">
                    Connect with me
                </center>
                <div className="icons text-black flex items-center mx-3 gap-4 text-2xl">
                    <i className={`fab fa-facebook-f`}></i>
                    <i className={`fab fa-linkedin-in`}></i>
                    <i className={`fab fa-twitter`}></i>
                    <i className={`fab fa-github`}></i>
                </div>
                <div className="contact flex text-xs gap-4 mx-3 text-black">
                    <p className={'underline'}>
                        sp332@njit.edu
                    </p>
                    <p>
                        +1 (862) 270 7072
                    </p>
                </div>

            </div>

        </main>
    )
}
