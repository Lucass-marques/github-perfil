import { useEffect, useState } from "react";

import styles from './Repos.module.css';

const Repos = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setIsLoading(false)
                setRepos(resJson);
            }, 3000);
            console.log(resJson);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {isLoading ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({id, name, language, html_url}) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> 
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> 
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Repos;