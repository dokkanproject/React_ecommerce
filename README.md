# PreEntrega 2 - Massimo Gagliardi

# Link del proyecto en VERCEL
https://react-ecommerce-eta-opal.vercel.app/

# Modificaciones de la Versión Para Entrega Final
+ Se Optimizó el CustomHook "useCount"
+ Se Sincronizó el Counter con el ItemDetail
+ Se Creó el Componente "Cart" que contiene el listado de los Productos Agregados
  + Recibe la Lista de ShopContext y muestra la cantidad de Productos agregados.
  + Se creó una validación para Verificar si el Producto ya existe en la Lista.
  + Se creó una Validación para que al agregar 1 producto, la cantidad del Producto elegido no supere el Stock Disponible del mismo.
+ Se Creo el Componente "ShopContext" para mantener el estado de las compras agregadas al carrito
+ ItemDetail:
  + Se Importó ShopContext y se creo la const "addToList"
  + Se agregó el evento onClick al boton de "Agregar al Carrito" y llamamos a addToList(info,count) pasándole como Props el Objeto con toda la información y la cantidad a Comprar.
+ CartWidget:
  + Se Importó ShopContext para acceder a la Lista y cambiar el numero en badgeContent cada vez que se agrega un producto nuevo.


# PreEntrega 1 y 2
# Modificaciones de la Versión
+ Cre creó la Visual del Ecommerce de Productos Tecnológicos
  + Desarrollo del Componente NavBar con 3 categorías Filtreables
      -   Celulares
      -   Tablets
      -   Auriculares
+ Se agregó el nombre de la Tienda (Tech Fusion)
+ Desarrollo del Componente CardWidget
+ Desarrollo del Componente ItemListContainer
+ Desarrollo del Componente Producto
+ Se creó el Componente ItemCount y se importó en el Producto
+ Se creó el Componente Custom Hooks "UseCount" aplicado al componente ITEM
+ Se Creó el Componente Custom Hooks "useFEtch" para ser reutilizado en las llamadas al Json de productos.
+ Se Creó el Componente ItemDetailContainer que contiene la funcionalidad para Cargar el Mockup del Detlle del Producto.
+ Se creó el Componente ItemDetail que contiene los estilos del Detalle del Producto y Recibe como parámetro la Info del producto Seleccionado.
+ Se Agregó la funcionalidad de Link para la navegación de Categorías "Está Aplicado en NavBar"
+ Se Agregaro los Route para la correcta navegación de los Productos de acuerdo con el ID que se le pasa como Parametro.
+ Se movió la funcionalidad de "Agregar al Carrito" y "ItemCount" que estába en la Home y se aplicó en el Detalle del Producto.
+ Se Agregó la funcionalidad de Filtrado de Categorías en ItemListContainer y se creo un nuevo producto para "Tablets"
+ Se mejoró el Card del producto y se le agregó efecto Over y se agregó el Evento stopPropagation

      
