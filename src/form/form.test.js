import { screen,render, getByRole, getByText, getByPlaceholderText } from "@testing-library/react";
import Form from "./Form";
import { formvalidation } from "./formvalidation";
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";
import App from "../App";

jest.mock('./formvalidation')
test('First',()=>{
    const {getByPlaceholderText} = render(<Form/>);

    const isim=getByPlaceholderText('firstName');
    expect(isim).toBeInTheDocument();
    const soyisim=screen.getByPlaceholderText(/last/i);
    expect(soyisim).toHaveAttribute('type');

    const btn=screen.getByRole('button');
    expect(btn).toBeInTheDocument();
})

test('form validation',()=>{
    const {getByText,getByPlaceholderText,getByRole,getByTestId}=render(<App/>);

    const errorText=getByTestId("error");
    expect(errorText).toBeInTheDocument();
    
    expect(errorText).toHaveTextContent('');

     
    userEvent.type(getByPlaceholderText(/first/i), "burak")
    userEvent.type(getByPlaceholderText(/last/i),"deme")
    userEvent.type(getByPlaceholderText(/passw/i), "123123")
    userEvent.type(getByPlaceholderText(/email/i), "burakdemir@gmail.com")

    userEvent.click(getByRole('button'));

    getByText(/hoşgeldiniz/i);


    
})


test('submit works properly', () => {
    const mockFormData = {
      firstName: 'test name',
      lastName: 'test last name',
      password: 'test password',
      email: 'test@mail.com',
    }
  
    const { getByRole, getByText, getByPlaceholderText } = render(<App />)
    
    userEvent.paste(getByPlaceholderText(/first/i), mockFormData.firstName)
    userEvent.paste(getByPlaceholderText(/last/i), mockFormData.lastName)
    userEvent.paste(getByPlaceholderText(/passw/i), mockFormData.password)
    userEvent.paste(getByPlaceholderText(/email/i), mockFormData.email)
  
    userEvent.click(getByRole('button'))
  
    getByText(/hoşgeldiniz/i)
  })
  