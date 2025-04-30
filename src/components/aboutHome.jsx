import image from "../assets/pexels-theshantanukr-17603742.jpg"
function AboutHome(){
    return <div className="flex items-center justify-between p-[30px]">
        <div className="w-[70%]">
            <img src={image} alt="image" />
        </div>
        <div className="w-[40%] p-8">
            <p >At Parakletus Publishing, we bring the writer in you to life. Whether you're an aspiring novelist or academic scholar, we provide tailored guidance and cutting-edge AI tools to streamline your journey from idea to publication.</p>
        </div>
    </div>
}

export default AboutHome