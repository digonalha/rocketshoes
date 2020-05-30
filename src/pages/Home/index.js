import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://authenticfeet.vteximg.com.br/arquivos/ids/225940-1000-1000/Tenis-adidas-Nite-Jogger-Cinza.jpg?v=636905283194000000"
          alt="Tenis"
        />
        <strong>Exemplo tenis</strong>
        <span>R$200,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://authenticfeet.vteximg.com.br/arquivos/ids/225940-1000-1000/Tenis-adidas-Nite-Jogger-Cinza.jpg?v=636905283194000000"
          alt="Tenis"
        />
        <strong>Exemplo tenis</strong>
        <span>R$200,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://authenticfeet.vteximg.com.br/arquivos/ids/225940-1000-1000/Tenis-adidas-Nite-Jogger-Cinza.jpg?v=636905283194000000"
          alt="Tenis"
        />
        <strong>Exemplo tenis</strong>
        <span>R$200,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size="16" color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
