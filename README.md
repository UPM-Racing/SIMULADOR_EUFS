# SIMULADOR_EUFS
Simulador EUFS con las modificaciones necesarias implementadas por nuestro equipo.

## Instrucciones de instalación

### Simulador

Clonar este repositorio:

``git clone [dirección ssh repositorio simulador] [nombre de carpeta]``

Esto clonará **únicamente** los ficheros del simulador. Falta nuestro stack de código, es decir, los paquetes: *simulation_nodes* y *fsuk_nodes*.

### Paquete *simulation_nodes*

En el directorio ``[simulador]/catkin_ws/src/simulation-nodes`` ejecutar:

``git clone [dirección ssh repositorio simulation_nodes] src``

Esto clonará el repositorio de simulation_nodes dentro de una carpeta llamada *src*.

### Paquete *fsuk_nodes*

En el directorio ``[simulador]/catkin_ws/src`` ejecutar:

``git clone [dirección ssh repositorio fsuk_nodes]``

Esto clonará el repositorio de *fsuk_nodes* en el directorio actual dentro de una carpeta llamada *fsuk_nodes*.

| :information_source: Nota          |
|:---------------------------|
| Es recomendable que las direcciones de los repositorios clonados sean de un fork en vez de usar los repositorios de la cuenta del equipo.   |