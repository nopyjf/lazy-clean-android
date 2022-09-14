package ${package}.services.promotion.mapper

import kotlinx.parcelize.Parcelize
import th.co.robinhood.common.mapper.EntityMapper
import javax.inject.Inject


class PromotionJaaEntityMapper @Inject constructor() : EntityMapper<PromotionJaaEntity, PromotionJaa> {

    fun transformPromotionJaaPromotionJaaEntity(entity): PromotionJaaPromotionJaa {
        return PromotionJaaPromotionJaa(
            promotionList = transformPromotionListEntities,
            pagination = transformPaginationEntity,

        )
    }

    fun transformPromotionJaaPromotionListEntity(entity): PromotionJaaPromotionList {
        return PromotionJaaPromotionList(
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

    fun transformPromotionJaaPaginationEntity(entity): PromotionJaaPagination {
        return PromotionJaaPagination(
            currentPage = entity.currentPage,
            pageSize = entity.pageSize,
            hasNextPage = entity.hasNextPage,
            hasPreviousPage = entity.hasPreviousPage,

        )
    }


}