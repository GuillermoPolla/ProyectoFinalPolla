Flash Shop - E-commerce de Ropa

Flash Shop es una aplicación web de comercio electrónico desarrollada en React. Permite a los usuarios explorar una variedad de productos de ropa flash y realizar compras en línea de manera fácil y segura.

Características
Exploración de productos: Los usuarios pueden navegar por una amplia selección de productos de ropa flash, incluyendo camisetas, pantalones, chaquetas y más.
Detalles del producto: Cada producto tiene su propia página de detalles donde los usuarios pueden ver imágenes, descripciones, tamaños disponibles y precios.
Carrito de compras: Los usuarios pueden agregar productos al carrito de compras, ver un resumen de los productos seleccionados y proceder al checkout.
Checkout: Los usuarios pueden completar el proceso de compra ingresando su información de envío y pago.
Gestión de productos: Los administradores pueden agregar, editar y eliminar productos desde un panel de administración.
Estructura del Proyecto
src/components/: Contiene los componentes de la aplicación, incluyendo la barra de navegación, los contenedores de lista de productos e detalles de producto, el carrito de compras, etc.
src/firebase/: Contiene los archivos relacionados con la configuración de Firebase y las funciones para interactuar con la base de datos.
src/App.jsx: Componente principal de la aplicación que define las rutas y el contexto del carrito de compras.
public/: Contiene archivos estáticos como imágenes y páginas HTML.
Instalación y Uso
Clona este repositorio en tu máquina local.
Instala las dependencias del proyecto utilizando npm install.
Configura tu proyecto Firebase y actualiza las credenciales en el archivo firebase.js.
Ejecuta la aplicación usando npm start.
Tecnologías Utilizadas
React: Para la construcción de la interfaz de usuario y la gestión del estado.
React Router: Para el enrutamiento de la aplicación.
Firebase: Para la gestión de la base de datos en tiempo real y la autenticación de usuarios.
