import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer class="foot">
            <div class="div-direitos">
                <h4>Sistema de Controle de Estoque de Medicamentos</h4>
                <p>&copy; Todos os direitos reservados</p>
            </div>     
            <div class="div-controle-de-estoque">
                <h4>O controle de estoque</h4>
                <p>- Planos e preços</p>
                <p>- Contato</p>
                <p>- Termos de uso</p>            
            </div>
            <div class="div-suporte">
                <h4>Suporte</h4>
                <p>- Vídeos</p>
                <p>- Central de ajuda</p>                        
            </div>
            <div class="div-redes-sociais">
                <ul>
                    <img src={require('../../assets/icons/facebook.png')} alt="ícone do facebook"/>                    
                    <img src={require('../../assets/icons/whatsapp.png')} alt="ícone do whatsapp"/>
                    <img src={require('../../assets/icons/instagram.png')} alt="ícone do instagram"/>
                    <img src={require('../../assets/icons/twitter.png')} alt="ícone do twitter"/>
                    <p>SoftInfraScript - 2024 - Software Ltda. <br/>CNPJ: xx.xxx.xxx/xxxx-xx. <br/>Endereço: Rua Ary Barroso, 20 - Papicu |
                        <br/>Fortaleza - CE Brasil. CEP 60175-205 Uma empresa</p>                    
                </ul>
            </div>            
        </footer>
    );
};