const Header = (props) => {
    return (
        <div>
            <h1>Olá, {props.nome}, seja bem-vindo!</h1>
        </div>
    );
};

Header.defaultProps = {
    nome: 'Nome padrão',
};

export default Header;