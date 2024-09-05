## Objetivo del proyecto

El objetivo de este proyecto es desarrollar un **calculador de seguros** utilizando **prototypes** en JavaScript. La aplicación permitirá a los usuarios seleccionar la marca de su vehículo, el año de fabricación y el tipo de seguro (básico o completo), y con base en esta información, calculará una cotización. Durante el desarrollo, se aprenderá a utilizar prototypes.

> **Nota:** Recuerda, que al usar **prototypes** conseguiremos que las funciones estén asociadas a un objeto específico.

## Desarrollo del proyecto

El proyecto se documentará paso a paso, explicando cada parte del código y el uso de prototypes. A medida que se vayan haciendo avances, se podrán consultar en el historial de **commits**.

## Primer paso: Creando los constructores

Lo primero que haremos es crear los **constructores**. Usaremos dos constructores: uno para el seguro, que almacenará la marca, el año y el tipo de seguro, y otro para la interfaz de usuario (UI), que manejará las interacciones con el DOM.

```javascript
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

function UI() {}
```
