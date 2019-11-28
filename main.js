class PriorityFIFO{
    constructor(Datoinicial, Prioridadinicial, Nodosiguiente){
        this._dato = Datoinicial;
        this._prioridad = Prioridadinicial;
        this._siguiente = Nodosiguiente;
    }
}

class Nodo{
    constructor(){
       let nuevo = new Prioridad(0,1);
       console.log(nuevo._dato); 
    }

    _agregarDato(Nodonuevo){
        if(this._dato==null){
           this._dato = Nodonuevo;
        }else{
            if(Nodonuevo.Prioridadinicial >this._Prioridadinicial);
            Nodonuevo.siguiente = this._dato;
            this._dato = Nodonuevo;
        }else{
            this._siguiente(this._dato, Nodonuevo);
        }
    }
}

  
_agregarNodoNuevo(nuevoNodo, ultimo){
    if(nuevoNodo.Prioridadinicial > ultimo.Prioridadinicial){
        ultimo.siguiente = nuevoNodo;
        let m = this._dato;
        while(m.siguiente != nuevoNodo)
        m=m.siguiente;
    }
    else{
         if(nuevo.prioridad>this._inicio.prioridad){
             nuevo.siguiente = this._inicio;
             this._inicio = nuevo;
         }else{
              _agregarNodo(nuevo, this._inicio);
         }
         else{
            if(ultimo.siguiente==null){
                ultimo.siguiente=nuevoNodo;
            }
            else{
                _agregarDato(nuevoNodo, ultimo.siguiente)
            }
        }
     }  