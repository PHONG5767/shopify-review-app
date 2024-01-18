import Header from "./header"
function DefaultLayout({children}) {
    return (
        <>
        <Header />
        <div>
            <div>{children}</div>
        </div>
        </>
    )
}
export default DefaultLayout

