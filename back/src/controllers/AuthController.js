const Auth = require("../config/Auth");

{/*async function create (req, res) {
    try {
        validationResult(req).throw();
        const { password } = req.body;
        const HashSalt = Auth.generatePassword(password);
        const salt = HashSalt.salt;
        const hash = HashSalt.hash;
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            cpf: req.body.cpf,
            hash: hash,
            salt: salt
        };
        const user = await User.create(newUser);
        console.log(user);
        return res.status(201).json({message: "Usuário cadastrado com sucesso!", user: user})
    }
    catch(err) {
        return res.status(500).json(err+"!");
    }
}
*/}




async function login(req, res) {
    try {
        const user = await User.findOne({ where: { email: req.body.email } })
        if (!user) {
            return res.status(404).json({ message: 'Usuário não cadastrado.' });
        }
        const { password } = req.body;
        if (Auth.checkPassword(password, user.hash, user.salt)) {
            const token = Auth.generateJWT(user);
            return res.status(202).json({ token });
        }
        else {
            return res.status(401).json('Senha incorreta.')
        }
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}


const getDetails = async(req, res) => {
	try {
		const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await User.findByPk(payload.sub);
		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
		return res.status(200).json({user:user});
	} catch (e) {
		return res.status(500).json({err: e})
	}
}



module.exports = {login, getDetails};
