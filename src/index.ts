import colors from "colors"
import server from "./server"

const port = 4000

server.listen(port, () => {
    console.log(colors.bgBlue("Servidor Funcionando"))
})
