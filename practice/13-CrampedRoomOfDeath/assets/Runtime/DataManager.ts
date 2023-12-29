import {ITile} from "db://assets/Levels";
import Singleton from "db://assets/Base/Singleton";
import {TileManager} from "db://assets/Scripts/Tile/TileManager";
import {PlayerManager} from "db://assets/Scripts/Player/PlayerManager";
import {WoodenSkeletonManager} from "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonManager";
import {IronSkeletonManager} from "db://assets/Scripts/IronSkeleton/IronSkeletonManager";
import {EnemyManager} from "db://assets/Base/EnemyManager";
import {DoorManager} from "db://assets/Scripts/Door/DoorManager";

export default class DataManager extends Singleton{
    static get Instance(){
       return super.GetInstance<DataManager>()
    }
    mapInfo: Array<Array<ITile>>
    tileInfo: Array<Array<TileManager>>
    mapRowCount: number = 0
    mapColumnCount: number = 0
    levelIndex: number = 1
    player: PlayerManager
    enemies: EnemyManager[]
    door: DoorManager

    reset(){
        this.mapInfo = []
        this.tileInfo = []
        this.player = null
        this.enemies = []
        this.door = null
        this.mapRowCount = 0
        this.mapColumnCount = 0
    }
}
