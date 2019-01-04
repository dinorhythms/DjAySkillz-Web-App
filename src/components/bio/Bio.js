import React, { Component } from 'react';
// import pagepg_img from './assets/images/page-bg.jpg';
import header_img from './assets/images/header.jpg';
import Header from '../layouts/Header';


class Bio extends Component {
  render() {
    return (
        <div className="wrapper">

            <Header title='BIOGRAPHY' breadcrumb='ABOUT BADDEST DJ AY SKILLZ' />

            <div className="section black-bg side-img-section what-we-do-section">
            
                <div className="col-sm-6 col-sm-offset-6 side-img hidden-xs" style={{backgroundImage: `url(${header_img})`}}>
            
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">

                            <h3 className="title">I suppose this is where I write about myself.</h3>

                            <p>Ayodele Oluwafemi Kadiku is a VJ/DJ, Remixer and Producer from Nigeria. He is popularly known as BADDEST DJ AY SKILLZ a.k.a De Life Of The Party. He grew up in Lagos, born July 8th 1986 as the second child from a family of three. He owns the vanity label Peculiar Digital.</p>

                            <p>He started calling himself AY SKILLZ in 2005. AY SKILLZ just as the name implies signifies he's more than a DJ who plays kinds of genre of music and , he is not restricted to any specific genre, his style of play has been tagged by many as ‘Magnum Opus’ as a result of his ability to bring all kinds of music in one playlist, these differentiated him out from the lots and won him several awards.</p>

                            <p>AY SKILLZ studied Business Administration at Yaba College of Technology, then went ahead to get DJ lessons and kept upgrading himself ever since with online tutorials & self rehearsals.</p>

                            <p>AY SKILLZ incredible deck talents in AfroBeats, Highlife, Hip Pop, RnB and EDM, dub-step and breaks, all sliced, mashed and cut together with a unique style of scratching and mixing. His reputation as a true party rocker has won him prime-time slots across the world at a ‘who’s who’ of major events.</p>

                            <p>When Playing Or mixing music on my sets, I explore each and every genre of party music, from Hip Hop, Rap, R&B, Pop, Rock, Dance hall, Funky house, Garrage, Africa & Nigerian tunes, and more, Deconstructing , Reconstructing and blurring the lines of what music culture should be with my personally custom Made music edits. I like to see how far I can push my creations. I like to thread every genre seamlessly to the point where my audience forgets that they are in a “Nightclub” or “Trendy Location” and start to really unwind like a private house party with close friends. Celebrating Music Culture and life through the enjoyment of all styles of music, All while approaching my performance with the energy of a concert.</p>

                            <p>He has been very instrumental to the development of the Nigerian music. Some of his Mixtapes have crossed beyond the border of Nigeria therefore exporting Nigerian talents far and wide. Some of his projects and mixtapes can be seen and downloaded on his official website www.djayskillz.com.</p>

                            <h4 className="title">MORE ABOUT DJ AY SKILLZ</h4>

                            <p>Often compared to, Cool DJ Jimmy Jatt, Armin van Buuren, Funk Master Flex, and other pioneering DJs for his flair for pushing the envelope and tapping into new musical trends way ahead of the curve. “I am an artist who explores a variety of Mediums. I work in the music industry under various disciplines and skills. From Producer to DJ to Remixer and Everything in between” Says AY SKIILZ.</p>

                            <p>As a testament to his versatility, AY SKILLZ has been known to play and conquer almost every club scene from high end chic boutique restaurants and hotels, to edgy and underground alternative , to fundraising and city sanctioned events, art exhibits, movie screenings, fashion shows, Summer pool parties, Wedding Ceremonies , Mega pride events and everything in between, relishing each moment.</p>

                            <p>He is affliated with Nigerian Best Industries which includes:</p>

                            <i className="fas fa-hand-point-right"></i> Lagoon Breeze Resturant Eko Hotel Pool Side Victoria Island Lagos <br/>
                            <i className="fas fa-hand-point-right"></i> The Official DJ For FreeMeDigital.com <br/>
                            <i className="fas fa-hand-point-right"></i> Unilag FM<br/> 
                            <i className="fas fa-hand-point-right"></i> Li Lieu De Leilas Lounge


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}

export default Bio;
