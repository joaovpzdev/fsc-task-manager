const Button = ({children, variant}) =>{
    const getVariantClasses = () => {
        if (variant === "primary") {
            return "bg-[#00adb5] text-white font-semibold"
        }
        if (variant === "secundary") {
            return "bg-transparent text-[#818181]"
        }
        
    }
    return <button className= {`flex items-center hover:opacity-50 gap-1 rounded-md px-3 py-1 text-xs transition ${getVariantClasses()}`}>
        {children}
    </button>
}

export default Button