import Head from 'next/head'
import dynamic from 'next/dynamic'

const RoleButton = dynamic(() => import('../components/role-button').then(mod=>mod.RoleButton))

function AdminPage() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content="Admin page for LeProfesseur education center"
                />
                <title>Le Prof - Gestion</title>
            </Head>
            <h1>Le Professeur</h1>
            <h2>Portail de Gestion</h2>
            <div>
                <p>Je suis:</p>
                <div>
                    <RoleButton value="Administrateur" />
                </div>
                <div>
                    <RoleButton value="Enseignant" />
                </div>
            </div>
        </div>
    );
}

export default AdminPage