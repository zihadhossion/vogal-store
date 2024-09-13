function Input({ type, txt, placeTxt }) {
    return (
        <input type={type} id={txt} placeholder={placeTxt} className="w-full h-12 text-base lg:text-lg font-medium text-black rounded pl-14 border-[1px] border-solid border-[#c4c3ca] transition-all placeholder:text-sm focus:placeholder:opacity-0" />
    )
}

export default Input;