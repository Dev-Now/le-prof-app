
import Head from 'next/head'
import dynamic from 'next/dynamic'

const CoursesList = dynamic(() => import('../components/lscourses'))

function HomePage() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content="Sign up portal for LeProfesseur education center"
                />
                <title>Le Prof - Inscription</title>
            </Head>
            <h1>Le Professeur</h1>
            <h2>Portail d'Inscription</h2>
            <p>Bienvenue sur le <b>Portail d'Inscription</b> du centre <b>Le Professeur</b>.</p>
            <CoursesList />
        </div>
    );
}

export default HomePage