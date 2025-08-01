import {GlassCard} from "../components/ui/glass-card.tsx";
import {ArrowDown} from "lucide-react";

export function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
            {/* 1. Effet arrière-plan */}
            <div></div>

            {/* 2. Contenu principal */}
            <div>
                <h1>Développeur Fullstack</h1>
                <p>Accroche…</p>
                <div>
                    <button>Voir mes projets</button>
                    <GlassCard>Me contacter</GlassCard>
                </div>
                <div>Icônes sociales</div>
            </div>

            {/* 3. Flèche de scroll */}
            <div><ArrowDown /></div>
        </div>
    );
}

export default Home;