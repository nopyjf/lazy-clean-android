package ${package}.services.mart.mapper

import kotlinx.parcelize.Parcelize
import th.co.robinhood.common.mapper.EntityMapper
import javax.inject.Inject


class MartFavEntityMapper @Inject constructor() : EntityMapper<MartFavEntity, MartFav> {

    override fun transformMartFavEntity(entity): MartFav {
        return MartFav(
            promotionList = transformPromotionListEntities,
            pagination = transformPaginationEntity,

        )
    }    override fun transformMartFavEntity(entity): MartFav {
        return MartFav(
            0 = transform0Entity,

        )
    }    override fun transformMartFavEntity(entity): MartFav {
        return MartFav(
            promotionId = entity.promotionId,
            promotionName = entity.promotionName,
            shortDescription = entity.shortDescription,
            discount = entity.discount,
            maximumDiscount = entity.maximumDiscount,
            discountType = entity.discountType,
            discountFor = entity.discountFor,
            promotionLink = entity.promotionLink,
            promotionType = entity.promotionType,
            iconUrl = entity.iconUrl,
            voucherCode = entity.voucherCode,
            promotionCode = entity.promotionCode,
            startDate = entity.startDate,
            endDate = entity.endDate,
            applicationKey = entity.applicationKey,

        )
    }
}