export function About() {
    return <div>
        <h1>About</h1>
        <div className='aboutBlock'>
            <p>Our marketplace is a dynamic and innovative platform designed to connect buyers and sellers seamlessly. With a user-friendly interface, it simplifies the process of discovering and acquiring a wide range of products and services. We strive to create a vibrant ecosystem where you can explore, transact, and build meaningful connections with fellow users. Join us on this exciting journey to experience a modern and efficient marketplace like never before.</p>
        </div>
        <div>
            <h2 className='ma-mid ta-cent' style={{marginTop:"50px"}}>Our team</h2>
            <div className="about-container">
                <div className='about-card'>
                    <p className='about-name'>Cristian Capcanari</p>
                    <p className="about-role">Full stack</p>
                    <img
                        src={"/imgs/foto3.jpg"}
                        className="about-img"
                    />
                </div>
                <div className='about-card'>
                    <p className='about-name'>Maxim Braguta</p>
                    <p className="about-role">Front end</p>
                    <img
                        src={"/imgs/foto1.jpg"}
                        className="about-img"
                    />
                </div>
                <div className='about-card'>
                    <p className='about-name'>Alexandru Lasco</p>
                    <p className="about-role">Back end</p>
                    <img
                        src={"/imgs/foto2.jpg"}
                        className="about-img"
                    />
                </div>
                <div className='about-card'>
                    <p className='about-name'>Evghenii Morogoi</p>
                    <p className="about-role">Back end</p>
                    <img
                        src={"/imgs/foto4.png"}
                        className="about-img"
                    />
                </div>
            </div>           
        </div>
    </div>
}