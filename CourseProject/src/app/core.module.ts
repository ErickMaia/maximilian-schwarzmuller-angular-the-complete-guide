import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipesService } from "./recipes/services/recipes.service";
import { ShoppingListService } from "./shopping-list/services/shopping-list.service";
import { LoggingService } from "./logging.service";


@NgModule({
    providers: [
        ShoppingListService,
        RecipesService,
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true,
        },
    ]
})
export class CoreModule{

}