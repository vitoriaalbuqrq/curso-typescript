import React, { createContext } from 'react';
//4 - Impotação de componentes
import FirstComponent from './components/FirstComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

//type
type textOrNull = string | null
type fixed = "isso" | "ou" | "aquilo"

//context
interface IAppContext {
  language: string,
  framework: string,
  projects: number,
}
export const AppContext = createContext<IAppContext | null>(null)

function App() {
  //1 - Variaveis
  const name: string = "Vitoria"
  const age: number = 23
  const isWorking: boolean = true

  //2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  //type
  const myText: textOrNull = "Tem algum texto aqui"
  const mySecondText: textOrNull = null;
  const myFixed: fixed = "isso";

  //context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <h2>Idade: {age}</h2>
        {isWorking && (
          <div>
            <p>Está trabalhando</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent name="Teste" />
        <Destructuring
          title='Primeiro Post'
          content='conteudo'
          commentsQty={5}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        <p>{myFixed}</p>
        <Context/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
