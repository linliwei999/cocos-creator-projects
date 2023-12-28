export enum TILE_TYPE_ENUM {
    WALL_ROW = 'WALL_ROW',
    WALL_COLUMN = 'WALL_COLUMN',
    WALL_LEFT_TOP = 'WALL_LEFT_TOP',
    WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',
    WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',
    WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',
    CLIFF_LEFT = 'CLIFF_LEFT',
    CLIFF_CENTER = 'CLIFF_CENTER',
    CLIFF_RIGHT = 'CLIFF_RIGHT',
    FLOOR = 'FLOOR',
}

export enum EVENT_ENUM {
    NEXT_LEVEL = 'NEXT_LEVEL',
    PLAYER_CTRL = 'PLAYER_CTRL',
}

export enum CONTROLLER_ENUM {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TURNLEFT = 'TURNLEFT',
    TURNRIGHT = 'TURNRIGHT',
}

export enum FSM_PARAMS_TYPE_ENUM{
    NUMBER = 'NUMBER',
    TRIGGER = 'TRIGGER',
}

export enum PARAMS_NAME_ENUM{
    IDLE = 'IDLE',
    TURNLEFT = 'TURNLEFT',
    DIRECTION = 'DIRECTION',
}

export enum DIRECTION_ENUM{
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    RIGHT = 'RIGHT',
    LEFT = 'LEFT',
}

export enum ENTITY_STATE_ENUM{
    IDLE = 'IDLE',
    TURNLEFT = 'TURNLEFT',
}

export enum DIRECTION_ODER_ENUM{
    TOP = 0,
    BOTTOM = 1,
    RIGHT = 2,
    LEFT = 3,
}

export enum ENTITY_TYPE_ENUM{
    PLAYER = 'PLAYER'
}