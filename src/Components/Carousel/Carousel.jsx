import Whitesneakers from "../../assets/Whitesneakers.png"
import Ornament from "../../assets/Ornament.png"

import "./Carousel.css"

function Carousel() {

    return (
        <>
            <section>
                <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div id="container" class="carousel-inner">
                        <div class="carousel-item active c-item">
                            <div id="ofertas">
                                <h6>Melhores ofertas personalizadas</h6>
                                <h1>Queima de estoque Nike 🔥</h1>
                                <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                <button>Ver Ofertas</button>
                            </div>
                            <div id="whitesneakers">
                                <img src={Whitesneakers} alt="Imagem de um tênis branco com detalhes vermelhos da marca AIR" /></div>
                            <div id="ornament">
                                <img src={Ornament} alt="Imagem de um círculo formado por pontos amarelos" />
                            </div>
                        </div>
                        <div class="carousel-item c-item">
                            <img src="https://images.unsplash.com/photo-1745730274677-9b64ef519b3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item c-item">
                            <img src="https://images.unsplash.com/photo-1745500415839-503883982264?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item c-item">
                            <img src="https://images.unsplash.com/photo-1745276235358-8771fa7eafc5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Carousel