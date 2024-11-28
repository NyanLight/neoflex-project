import { Button } from "../../ui/Button/Button"
import type { Link } from "../../types"

export function Header() {
    const links: Link[] = [
        {   
            key: 1,
            name: 'Credit card',
            url: 'www.example.com',            
        },
        {   
            key: 2,
            name: 'Product',
            url: 'www.example.com',            
        },
        {   
            key: 3,
            name: 'Account',            
            url: 'www.example.com',
        },
        {   
            key: 4,
            name: 'Resource',
            url: 'www.example.com',            
        },
    ]


    return (
        <header>
            <span>NeoBank</span>
            <nav>
               <ul>
                {links.map(link => 
                    <li key={link.key}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                )}
               </ul>
            </nav>
            <Button text="Online Bank" padding={8} />
        </header>
    )
}