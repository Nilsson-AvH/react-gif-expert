import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"
//import test from "test"//OJO CON IMPORTAR ESTA PORQUERIA, SE TIRA LOS TEST

describe('Pruebas en el componenete <GifItem.jsx>', () => { 

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('Debe hacer match con el snapshot', () => { 

        const {container} = render(<GifItem title={title} url={url} />)
        expect (container).toMatchSnapshot()

     })

     test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 

        render(<GifItem title={title} url={url} />) // Renderizamos nuestro sujeto de pruebas
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const{ src,alt } = screen.getByRole('img') // Desestructuramos src y alt de img
        expect(src).toBe(url) // Verificamos que src(desdestructurado) sea igual a url(sujeto de pruebas)
        expect(alt).toBe(alt)

      })

      test('Debe mostrar el titulo del componente', () => { 
        
        render(<GifItem title={title} url={url} />) // Renderizamos nuestro sujeto de pruebas
        expect(screen.getByText(title)).toBeTruthy() // Test de que title exista

       })

 })