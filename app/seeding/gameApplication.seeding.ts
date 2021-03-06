import { random } from 'faker';

import GameApplication from '../models/gameApplication.model';
import Game from '../models/game.model';
import User from '../models/user.model';

export default class GameApplicationSeeding {
    public static default(): GameApplication {
        const gameApplication = new GameApplication();

        gameApplication.game = null;
        gameApplication.user = null;
        gameApplication.team = random.arrayElement([0, 1, null]);
        gameApplication.assignedLanguages =
            gameApplication.team != null ? [random.arrayElement(['js', 'css', 'html'])] : [];

        return gameApplication;
    }

    public static withGameAndUser(game: Game, user: User, blankAssignment = false): GameApplication {
        const application = this.default();

        application.game = game;
        application.user = user;

        if (blankAssignment) {
            application.assignedLanguages = [];
            application.team = null;
        }

        return application;
    }
}
