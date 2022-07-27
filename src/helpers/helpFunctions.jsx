export const helpFunctions = () => {
    const inputValue = ({ target }) => {
        const element = target
        const inputValueC = target.value
        if (inputValueC.length > 0) {
            element.parentElement.lastChild.classList.add('input-value')
        } else {
            element.parentElement.lastChild.classList.remove('input-value')
        }
    }
    const forceStringNumber = (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-zá-üÁ-Ü0-9\s]/g, '')
    }
    const forceNumber = (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    }
    const forceDecimal = (e) => {
        //eslint-disable-next-line
        e.target.value = e.target.value.replace(/[^\d\.]/g, '')
    }
    const forceString = (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-zá-üÁ-Ü\s]/g, '')
    }
    
    return {
        inputValue,
        forceStringNumber,
        forceNumber,
        forceDecimal,
        forceString,
    }
}