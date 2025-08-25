import { useState } from 'react'
// import Button from './components/Button'
import Accordion from '../components/Accordion'

function AccordionPage() {
    const items = [
        {
            id:'hd34ku',
            label: 'Can I Use React on a project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        },
        {   
            id:'lsite8',
            label: 'Can I Use JavaScript on a project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'

        },
        {   
            id:'ndyu45',
            label: 'Can I Use CSS on a project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        },
    ]

  return (
    <>
     <Accordion items = {items} />
    </>
  )
}

export default AccordionPage;
