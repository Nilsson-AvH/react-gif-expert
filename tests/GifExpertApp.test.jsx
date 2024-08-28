import { render, renderHook, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el componente GifExpertApp', () => { 
    
    test('should first', () => { 
        
        render( <GifExpertApp /> )
        // screen.debug()

        const {resul} =  renderHook( () => GifExpertApp() ) 
        
        screen.debug(resul)

     })

 })