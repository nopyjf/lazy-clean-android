package th.co.robinhood.services.mart.repository

import io.reactivex.Single
import th.co.robinhood.common.di.FeatureAnnotation
import th.co.robinhood.model.mart.MartFav.MartFav
import th.co.robinhood.model.mart.MartFav.MartFavMapper
import th.co.robinhood.services.mart.request.MartFavRequest
import th.co.robinhood.services.mart.service.MartApi
import javax.inject.Inject


@FeatureAnnotation
class MartRepository @Inject constructor(
    private val api: MartApi,
    private val mapper: MartFavEntityMapper
) : MartRepositoryContractor {

    override fun getMartFav(request: MartFavRequest): Single<MartFav> {
        return api.getMartFav(request)
            .map { it.data }
            .map { mapper.transformEntity(it) }
        
        service.getMartFav(request)
    }
}