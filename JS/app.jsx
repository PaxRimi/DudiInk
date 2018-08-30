import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    let number = 0;
    let link;

class Footer extends React.Component {
    render(){
        return <footer>
            &copy; 2018 Dudi.ink
        </footer>
    }
}

class LocationsSite extends React.Component{
    render(){
        return <section className="map">
            <h2>Nasze strony i lokalizacja</h2>
            <div><a href="https://www.facebook.com/DudiINK/?fb_dtsg_ag=Adx8d8h-hZv3O4ClN8asf7ntdMjNE-j0n6LjFiNTELNo_Q%3AAdzpmTZx3XmPfUPOCgzPByLD-sUzdIdKxmqW-Hr2AwxxKQ" target="_blank"><i className="fab fa-facebook-square"></i></a><a href="https://www.instagram.com/explore/locations/834068309989273/dudi-ink-tattoo-studio/" target="_blank"><i className="fab fa-instagram"></i></a></div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626.1187292461133!2d17.05957469479763!3d51.11814742454151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1d8165ada7c1d5e!2sDudi+Ink+Tattoo+Studio!5e0!3m2!1sen!2spl!4v1535616509497" ></iframe>
        </section>
    }
}







class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: "",
            occupation: "",
            artist: "",
            nameVal: "",
            surnameVal: "",
            emailVal: "",
            phoneVal: "",
            occupationVal: "",
            artistVal: "",
            messageVal: "",
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handleDepartmentChange = (event) => {
        this.setState({
            department: event.target.value,
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value,
        })
    }

    handleSurnameChange = (event) => {
        this.setState({
            surname: event.target.value,
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value,
        })
    }

    handleOccupationChange = (event) => {
        this.setState({
            occupation: event.target.value,
        })
    }

    handleArtistChange = (event) => {
        this.setState({
            artist: event.target.value,
        })
    }

    handleFormVal = (e) => {
        console.log("Wszedłem do funkcji")
        let name;
        let surname;
        let email;
        let phone;
        let occupation;
        let artist;
        let message;

        if (this.state.name !== "") {
            name = true;
        } else {
            name = false;
        }

        if (this.state.surname !== "") {
            surname = true;
        } else {
            surname = false;
        }

        if (this.state.email !== "" && this.state.email.indexOf('@') >= 0) {
            email = true;
        } else {
            email = false;
        }

        if (this.state.phone !== "" && this.state.phone.length >= 9 ) {
            phone = true;
        } else {
            phone = false;
        }

        if (this.state.occupation !== "" ) {
            occupation = true;
        } else {
            occupation = false;
        }

        if (this.state.artist !== "" ) {
            artist = true;
        } else {
            artist = false;
        }

        if (this.state.message !== "" ) {
            message = true;
        } else {
            message = false;
        }

        this.setState({
            nameVal: name,
            surnameVal: surname,
            emailVal: email,
            phoneVal: phone,
            occupationVal: occupation,
            artistVal: artist,
            messageVal: message,
        })

        if (name === true && surname === true && email === true && phone === true && occupation === true && artist === true && message === true ) {
            console.log("Działa")
        } else {
            e.preventDefault()
        }
    }


    render(){
        let valName = null;
        let valSurname = null;
        let valEmail = null;
        let valPhone = null;
        let valOccupation = null;
        let valArtist = null;
        let valMessage = null;

        if (this.state.nameVal !== "") {
            this.state.nameVal === true ? valName = null : valName = "Wypełnij pole z imieniem/Please fill the name form"
        }

        if (this.state.surnameVal !== "") {
            this.state.surnameVal === true ? valSurname = null : valSurname = "Wypełnij pole z nazwiskiem/Please fill the surname form"
        }

        if (this.state.emailVal !== ""){
            this.state.emailVal === true ? valEmail = null : valEmail = "Wypełnij pole z mailem/Please fill the email form"
        }

        if (this.state.phoneVal !== ""){
            this.state.phoneVal === true ? valPhone = null : valPhone = "Wypełnij pole z telefonem/Please fill the phone form"
        }

        if (this.state.occupationVal !== ""){
            this.state.occupationVal === true ? valOccupation = null : valOccupation = "Wypełnij pole z miejscem zamieszkania/Please fill the occupation form"
        }

        if (this.state.artistVal !== ""){
            this.state.artistVal === true ? valArtist = null : valArtist = "Wypełnij pole z artystą/Please fill the artist form"
        }

        if (this.state.messageVal !== ""){
            this.state.messageVal === true ? valMessage = null : valMessage = "Wypełnij pole z informacjami o tatuażu/Please fill the message form"
        }


        return <section className="form">
            <h2>Pola oznaczone * są obowiazkowe</h2>
            <form>
                <fieldset>
                <label>Imię / Name *:
                    <br/>
                    <input className="inputTxT" type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <p className="errorTxt">{valName}</p>
                <label>Nazwisko / Surname *:
                    <br/>
                    <input className="inputTxT" type="text" value={this.state.surname} onChange={this.handleSurnameChange}/>
                </label>
                <p className="errorTxt">{valSurname}</p>
                <label>Email *:
                    <br/>
                    <input className="inputTxT" type="email" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                <p className="errorTxt">{valEmail}</p>
                <label>Telefon / Phone *:
                    <br/>
                    <input className="inputTxT" type="number" value={this.state.phone} onChange={this.handlePhoneChange}/>
                </label>
                <p className="errorTxt">{valPhone}</p>
                <label>Miejsce Zamieszkania / Occupation *:
                    <br/>
                    <input className="inputTxT" type="text" value={this.state.occupation} onChange={this.handleOccupationChange}/>
                </label>
                <p className="errorTxt">{valOccupation}</p>
                </fieldset>
                <fieldset>
                <p>Preferowany dzień wizyty / Prefered appointment day *:</p>
                <br/>
                <label>
                <input type="checkbox" name="weekday" value="Monday"/>Pon/Mon
                </label>
                <label>
                <input type="checkbox" name="weekday" value="Tuesday"/>Wt/Tue
                </label>
                <label>
                <input type="checkbox" name="weekday" value="Wednesday"/>Śr/Wed
                </label>
                <label>
                <input type="checkbox" name="weekday" value="Thursday"/>Czw/Thu
                </label>
                <label>
                <input type="checkbox" name="weekday" value="Friday"/>Pt/Fri
                </label>
                <label>
                <input type="checkbox" name="weekday" value="Saturday"/>So/Sat
                </label>
                <label>
                <input type="checkbox" name="weekday" value="Sunday"/>N/Sun
                </label>
                <label>Artysta lub styl / Artist of style *:
                    <br/>
                    <input className="inputTxT" type="text" value={this.state.artist} onChange={this.handleArtistChange}/>
                </label>
                <p className="errorTxt">{valArtist}</p>
                <label>Opis tatuażu / Tattoo description *:
                    <br/>
                    <textarea value={this.state.message} onChange={this.handleMessageChange}/>
                </label>
                <p className="errorTxt">{valMessage}</p>
                <span>
                <input type="submit" value="Wyślij/Submit" onClick={this.handleFormVal}/>
                </span>
                </fieldset>
            </form>
        </section>
    }
}   
    
class Artists extends React.Component {

    hendleClickArtist = (e) => {
        console.log(e.currentTarget.nextElementSibling);
        const targer = e.currentTarget;

        let a = targer.nextElementSibling.querySelector("a");

        if(a.style.display === "" || a.style.display === "none") {
            a.style.display = "block";
        } else {
            a.style.display = "none";
        }
    }

    render(){
        return <section className="artists">
            <span>
            <div className="artist Dudi" onClick={(e) => this.hendleClickArtist(e)}>
            </div>
            <div className="insta">
                <a href="https://www.instagram.com/dudi.tattoo/" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
            </span>
            <span>
            <div className="artist Chesnut" onClick={(e) => this.hendleClickArtist(e)}>
            </div>
            <div className="insta">
                <a href="https://www.instagram.com/chestnut_tattoo/" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
            </span>
            <span>
            <div className="artist Ula" onClick={(e) => this.hendleClickArtist(e)}>
            </div>
            <div className="insta">
                <a href="https://www.instagram.com/sinkuptattoo/" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
            </span>
            <span>
            <div className="artist Tama" onClick={(e) => this.hendleClickArtist(e)}>
            </div>
            <div className="insta">
                <a href="https://www.instagram.com/tama_art.tattoo/" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
            </span>
        </section>
    }
    }

class Gallery extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            gallery: ["./img/photo1.jpg","./img/photo2.jpeg","./img/photo3.jpg","./img/photo4.jpg","./img/photo5.png","./img/photo6.png","./img/photo7.jpg","./img/photo8.jpg"],
            img: "./img/photo1.jpg",
        }
    }

    componentDidMount(){
        this.intervalId = setInterval(() => {

            if (number === this.state.gallery.length -1 ){
                number = 0;
            } else {
                number++
            }

            link = this.state.gallery[number]
            console.log(number);
            this.setState({
                img: link,
            })
        }, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return <section className="gallery">
            <h2>Przykładowe prace/Some of our works:</h2>
            <img className="phone" src={this.state.img} alt="tattoo work"/>
            <div className="tabletGallery">
                <figure>
                    <img src="./img/photo1.jpg" alt="tattoo work"/>
                    <figcaption>Dudi</figcaption>
                </figure>
                <figure>
                    <img src="./img/photo2.jpeg" alt="tattoo work"/>
                    <figcaption>Dudi</figcaption>
                </figure>
                <figure>
                    <img src="./img/photo3.jpg" alt="tattoo work"/>
                    <figcaption>S.INK UP</figcaption>
                </figure>
                <figure>
                    <img src="./img/photo4.jpg" alt="tattoo work"/>
                    <figcaption>S.INK UP</figcaption>
                </figure>
                <figure>
                    <img src="./img/photo5.png" alt="tattoo work"/>
                    <figcaption>Chestnut</figcaption>
                </figure>
                <figure>
                    <img src="./img/photo6.png" alt="tattoo work"/>
                    <figcaption>Chestnut</figcaption>
                </figure>
                <figure>
                    <img src="./img/photo7.jpg" alt="tattoo work"/>
                    <figcaption>Tama</figcaption>
                </figure>
                <figure>
                    <img src="./img/photo8.jpg" alt="tattoo work"/>
                    <figcaption>Tama</figcaption>
                </figure>





            </div>
        </section>
    }
}

class Header extends React.Component{
    render(){
        return <header>
            <img className="logo" src="./img/Logo-DudiINK-298x300.jpg"/>
            <p>Studio Dudi Ink! Jedyne w swoim rodzaju miejsce, gdzie gość salonu spotyka się z indywidualnym podejściem, oraz kawałekiem przedniej sztuki. <span className="phoneTxT">Przyjdź i przekonaj się sam ! </span><span className="bigScreenText">Jeśli szukasz ludzi, którzy znajdą czas dla Ciebie i spokojnie będzie można omówić Twoje najbardziej wyszukane pomysły, to jest właśnie miejsce dla Ciebie :)</span></p>
        </header>
    }
}


    class App extends React.Component {

        render() {
            return <div className="container">
                <Header/>
                <Gallery />
                <Artists />
                <Form />
                <LocationsSite />
                <Footer/>
            </div>
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});