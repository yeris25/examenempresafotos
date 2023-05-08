import React from 'react'




const Nav = () => {
  return (
    <header>
        <nav>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/clientes"}>Clientes</Link>
            <Link to={"/proveedores"}>Proveedores</Link>
            <Link to={"/estudios"}>Estudios</Link>
        </nav>
    </header>
  )
}


export default Nav