import { useState } from "react";
import { Carousel } from "react-bootstrap";
import whiteTenis from "../../assets/whiteTenis.png";
import './DetalhesProdutos.css';

export function DetalhesProdutos() {
    const images = [
        { id: 1, src: whiteTenis, bg: "bg-primary-subtle" },
        { id: 2, src: whiteTenis, bg: "bg-warning-subtle" },
        { id: 3, src: whiteTenis, bg: "bg-danger-subtle" },
        { id: 4, src: whiteTenis, bg: "bg-warning-subtle" },
        { id: 5, src: whiteTenis, bg: "bg-light" },
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section id="product-page">
            <div id="product-body">
                <div id="product-roots">
                    <p><b>Home</b> / Produtos / Tênis / Nike / Tênis Nike Revolution Nature Masculino</p>
                </div>
                <div id="product-container" className="d-flex flex-wrap gap-4">

                    <div id="product-images" className="flex-grow-1">
                        <div id="product-carousel" className={`carrossel-bg ${images[index].bg}`}>
                            <Carousel
                                activeIndex={index}
                                onSelect={handleSelect}
                                controls={true}
                                indicators={false}
                                fade
                                className="w-100"
                            >
                                {images.map((item) => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="carrossel-img"
                                            src={item.src}
                                            alt=""
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        <div id="product-thumbnails" className="miniaturas-container">
                            {images.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => setIndex(idx)}
                                    className={`miniatura-btn ${index === idx ? 'miniatura-ativa' : ''}`}
                                >
                                    <div className={`miniatura-bg ${item.bg}`}>
                                        <img src={item.src} alt={`Thumb ${idx}`} className="miniatura-img" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>


                    <div id="product-info" className="flex-grow-1">
                        <h1 id="product-title">Tênis Nike Revolution 6 Next Nature Masculino</h1>
                        <p id="product-subtitle">Casual | Nike | REF:38416711</p>


                        <div id="product-rating" className="d-flex align-items-center gap-2 my-2">
                            <span>⭐⭐⭐⭐⭐</span>
                            <span className="badge bg-warning text-white">4.7</span>
                            <span>(90 avaliações)</span>
                        </div>


                        <div id="product-price" className="my-3">
                            <span className="fs-4 fw-bold">R$ 219,00</span>
                            <span className="text-decoration-line-through text-muted ms-2">R$ 249,00</span>
                        </div>


                        <p id="product-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>


                        <div id="product-sizes" className="my-3">
                            <p className="fw-semibold">Tamanho</p>
                            <div className="d-flex gap-2">
                                {[39, 40, 41, 42, 43].map((size) => (
                                    <button key={size} className="btn btn-outline-secondary btn-hover">{size}</button>
                                ))}
                            </div>
                        </div>


                        <div id="product-colors" className="my-3">
                            <p className="fw-semibold">Cores</p>
                            <div className="d-flex gap-2">
                                <button id="botao" className="btn rounded-circle p-3 btn-border" style={{ backgroundColor: '#00CFFF' }}></button>
                                <button id="botao" className="btn rounded-circle p-3 btn-border" style={{ backgroundColor: '#D8325A' }}></button>
                                <button id="botao" className="btn rounded-circle p-3 btn-border" style={{ backgroundColor: '#474747' }}></button>
                                <button id="botao" className="btn rounded-circle p-3 btn-border" style={{ backgroundColor: '#7878C9' }}></button>
                            </div>
                        </div>

                        <button id="product-buy-button" className="btn btn-warning fw-bold w-50 mt-4 text-white">
                            COMPRAR
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
