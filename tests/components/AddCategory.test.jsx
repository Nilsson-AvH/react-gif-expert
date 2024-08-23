import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en < AddCategory />', () => { 
    
    test('Debe cambiar el valor de la caja de texto', () => { 
        
        render(<AddCategory onNewCategory={ () => {} }  />) // Creamos el sujeto de pruebas
        const input = screen.getByRole('textbox')   // Extraemos el input

        fireEvent.input( input, { target: { value: 'Saitama' } } )  // Disparamos el evento

        expect( input.value ).toBe('Saitama') // Hacemos la comparacion de lo que esperamos de resulado
        // screen.debug()

     })

     test('Debe llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama' // Creando valor a evaluar
        const onNewCategory = jest.fn() // funcion moc o de prueba de Jest

        render(<AddCategory onNewCategory={ onNewCategory }  />) // Creamos el sujeto de pruebas

        const input = screen.getByRole('textbox') // Halar referencias al input
        const form = screen.getByRole('form') // Halar referencias al form

        fireEvent.input( input, { target: { value: inputValue }}) // Disparamos el evento del formulario para establecer el valor
        fireEvent.submit (form)
        // screen.debug()
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled() // Que la funcion haya sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1) // Que la funcion haya sido llamada n veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) // Que la funcion haya sido llamada con nuestro input value
        
      })

      test('No debe llamar el onNewCategory si el input está vacio', () => { 
        
        
        const onNewCategory = jest.fn() // funcion moc o de prueba de Jest
        render(<AddCategory onNewCategory={ onNewCategory }  />) // Creamos el sujeto de pruebas

        const form = screen.getByRole('form') // Halar referencias al form
        fireEvent.submit (form)

        expect(onNewCategory).toHaveBeenCalledTimes(0) // Que la funcion haya sido llamada n veces
        expect(onNewCategory).not.toHaveBeenCalled() // Que la funcion NO (not.)haya sido llamada

       })

 }) 