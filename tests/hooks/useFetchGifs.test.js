import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    
    test('Debe de regresar el estado inicial.', () => { 
        // El estado inicial es en el cual: images retorne 
        // un arreglo vacio y isLoading esté en true.

        const { result } = renderHook( () => useFetchGifs('One Punch') )
        console.log(result)
        const { images, isLoading } = result.current
        
        expect(images.length).toBe(0)
        expect(isLoading).toBe(true)
        expect(isLoading).toBeTruthy
    })
    
    test('Debe de regresar un arreglo de imagenes y el isLoading en false.', async() => { 
        // El estado NO inicial es que el images retorne 
        // un arreglo de images y isLoading esté en false.
        
        const { result } = renderHook( () => useFetchGifs('One Punch') )
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 6000
            }
        )
        
        const { images, isLoading } = result.current
        
        expect(images.length).toBeGreaterThan(0)
        
        expect(isLoading).toBe(false)
        expect(isLoading).toBeFalsy
    })
    
    
})